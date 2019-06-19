import os
import sys

import argparse
import pkg_resources

from . import utils
from .fairtask_launcher import FAIRTaskLauncher

# add cwd to path to allow running directly from the repo top level directory
sys.path.append(os.getcwd())


def get_args():
    parser = argparse.ArgumentParser(description='Hydra experimentation framework')
    version = pkg_resources.require("hydra")[0].version
    parser.add_argument('--version', action='version', version="hydra {}".format(version))

    def add_default_switches(prs):
        prs.add_argument(
            help="Task directory or name",
            type=str,
            dest="task"
        )
        prs.add_argument('overrides', nargs='*', help="Any key=value arguments to override config values "
                                                      "(use dots for.nested=overrides)")

    subparsers = parser.add_subparsers(help="sub-command help", dest="command")
    parser.add_argument('--verbose', '-v',
                        help='Activate debug logging, otherwise takes a '
                             'comma separated list of loggers ("root" for root logger)',
                        nargs='?',
                        default='')

    cfg_parser = subparsers.add_parser("cfg", help="Show generated cfg")
    add_default_switches(cfg_parser)

    cfg_parser.add_argument('--debug', '-d', action="store_true", default=False,
                            help="Show how the config was generated")

    run_parser = subparsers.add_parser("run", help="Run a task")
    add_default_switches(run_parser)

    sweep_parser = subparsers.add_parser("sweep", help="Run a parameter sweep")
    add_default_switches(sweep_parser)

    return parser.parse_args()


def cfg_cmd(args):
    cfg_dir = utils.find_cfg_dir(args.task)
    task_cfg = utils.create_task_cfg(cfg_dir, args)
    cfg = task_cfg['cfg']
    utils.configure_log(cfg_dir, cfg, args.verbose)
    if args.debug:
        for file, loaded in task_cfg['checked']:
            if loaded:
                print("Loaded: {}".format(file))
            else:
                print("Not found: {}".format(file))
    print(cfg.pretty())


def sweep_cmd(args):
    cfg_dir = utils.find_cfg_dir(args.task)
    hydra_cfg = utils.create_hydra_cfg(cfg_dir, args.overrides)

    launcher = FAIRTaskLauncher(hydra_cfg, args.task, args.overrides)
    launcher.launch()


def run_cmd(args):
    cfg_dir = utils.find_cfg_dir(args.task)
    hydra_cfg = utils.create_hydra_cfg(cfg_dir=cfg_dir, overrides=args.overrides)
    utils.run_job(hydra_cfg=hydra_cfg,
                  task=args.task,
                  overrides=args.overrides,
                  verbose=args.verbose,
                  workdir=hydra_cfg.hydra.run_dir)


def main():
    utils.setup_globals()
    args = get_args()
    if args.command == 'run':
        run_cmd(args)
    elif args.command == 'cfg':
        cfg_cmd(args)
    elif args.command == 'sweep':
        sweep_cmd(args)


if __name__ == '__main__':
    main()

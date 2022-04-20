import * as core from "@actions/core";
import * as installNix from "./installNix";
import * as windows from "./windows";

async function run() {
    try {
        switch (process.platform) {
            case "linux":
            case "darwin": {
                const version = core.getInput("version");
                const emacsCIVersion = "emacs-" + version.replace(".", "-");
                await installNix.run(emacsCIVersion);
            } break;
            case "win32": {
                await windows.run();
            } break;
        }

    } catch (error) {
        core.setFailed(error.message);
    }
}

run();

import { bootstrapPlugins, initializeShell } from "@uxland/primary-shell";
import { plugins } from "./plugins";

const createAndAppendSandboxApp = () => {
    const app = document.createElement('fim-sandbox-app');
    document.body.appendChild(app);
    const sandbox = document.querySelector('fim-sandbox-app');
    return sandbox;
}

const initializeSandboxApp = (sandbox) => {
    try {
        if (sandbox) {
            initializeShell(sandbox as HTMLElement);
            bootstrapPlugins(plugins);
        }
    }
    catch (error) {
        console.warn(error);
    }
}

const sandbox = createAndAppendSandboxApp();
initializeSandboxApp(sandbox);





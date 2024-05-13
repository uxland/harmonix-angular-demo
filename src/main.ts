import { initializeShell,bootstrapModules } from "@uxland/primary-shell";
import { moduleLoader, modules } from "./modules";

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
            bootstrapModules(modules, moduleLoader);
        }
    }
    catch (error) {
        console.warn(error);
    }
}

const sandbox = createAndAppendSandboxApp();
initializeSandboxApp(sandbox);





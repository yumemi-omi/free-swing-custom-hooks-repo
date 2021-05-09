import { setupWorker } from "msw";
import { handlers } from "./rest-handler";

export const worker = setupWorker(...handlers);

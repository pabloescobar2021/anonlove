import type { TelegramMessage } from "../type";
import { handleNotificationToggle } from "../handleNotificationToggle";

export type tgCommandHandler = (msg: TelegramMessage) => Promise<void>;

export const tgCommandMap: Record<string, tgCommandHandler> = {
    "/notifications": handleNotificationToggle
}
import { z } from "zod"

import { LunaCoPilotEventName, lunaCoPilotEventsSchema, lunaCoPilotSettingsSchema } from "./index"

/**
 * Ack
 */

export const ackSchema = z.object({
	clientId: z.string(),
	pid: z.number(),
	ppid: z.number(),
})

export type Ack = z.infer<typeof ackSchema>

/**
 * TaskCommand
 */

export enum TaskCommandName {
	StartNewTask = "StartNewTask",
	CancelTask = "CancelTask",
	CloseTask = "CloseTask",
}

export const taskCommandSchema = z.discriminatedUnion("commandName", [
	z.object({
		commandName: z.literal(TaskCommandName.StartNewTask),
		data: z.object({
			configuration: lunaCoPilotSettingsSchema,
			text: z.string(),
			images: z.array(z.string()).optional(),
			newTab: z.boolean().optional(),
		}),
	}),
	z.object({
		commandName: z.literal(TaskCommandName.CancelTask),
		data: z.string(),
	}),
	z.object({
		commandName: z.literal(TaskCommandName.CloseTask),
		data: z.string(),
	}),
])

export type TaskCommand = z.infer<typeof taskCommandSchema>

/**
 * TaskEvent
 */

export const taskEventSchema = z.discriminatedUnion("eventName", [
	z.object({
		eventName: z.literal(LunaCoPilotEventName.Message),
		payload: lunaCoPilotEventsSchema.shape[LunaCoPilotEventName.Message],
	}),
	z.object({
		eventName: z.literal(LunaCoPilotEventName.TaskCreated),
		payload: lunaCoPilotEventsSchema.shape[LunaCoPilotEventName.TaskCreated],
	}),
	z.object({
		eventName: z.literal(LunaCoPilotEventName.TaskStarted),
		payload: lunaCoPilotEventsSchema.shape[LunaCoPilotEventName.TaskStarted],
	}),
	z.object({
		eventName: z.literal(LunaCoPilotEventName.TaskModeSwitched),
		payload: lunaCoPilotEventsSchema.shape[LunaCoPilotEventName.TaskModeSwitched],
	}),
	z.object({
		eventName: z.literal(LunaCoPilotEventName.TaskPaused),
		payload: lunaCoPilotEventsSchema.shape[LunaCoPilotEventName.TaskPaused],
	}),
	z.object({
		eventName: z.literal(LunaCoPilotEventName.TaskUnpaused),
		payload: lunaCoPilotEventsSchema.shape[LunaCoPilotEventName.TaskUnpaused],
	}),
	z.object({
		eventName: z.literal(LunaCoPilotEventName.TaskAskResponded),
		payload: lunaCoPilotEventsSchema.shape[LunaCoPilotEventName.TaskAskResponded],
	}),
	z.object({
		eventName: z.literal(LunaCoPilotEventName.TaskAborted),
		payload: lunaCoPilotEventsSchema.shape[LunaCoPilotEventName.TaskAborted],
	}),
	z.object({
		eventName: z.literal(LunaCoPilotEventName.TaskSpawned),
		payload: lunaCoPilotEventsSchema.shape[LunaCoPilotEventName.TaskSpawned],
	}),
	z.object({
		eventName: z.literal(LunaCoPilotEventName.TaskCompleted),
		payload: lunaCoPilotEventsSchema.shape[LunaCoPilotEventName.TaskCompleted],
	}),
	z.object({
		eventName: z.literal(LunaCoPilotEventName.TaskTokenUsageUpdated),
		payload: lunaCoPilotEventsSchema.shape[LunaCoPilotEventName.TaskTokenUsageUpdated],
	}),
])

export type TaskEvent = z.infer<typeof taskEventSchema>

/**
 * IpcMessage
 */

export enum IpcMessageType {
	Connect = "Connect",
	Disconnect = "Disconnect",
	Ack = "Ack",
	TaskCommand = "TaskCommand",
	TaskEvent = "TaskEvent",
}

export enum IpcOrigin {
	Client = "client",
	Server = "server",
}

export const ipcMessageSchema = z.discriminatedUnion("type", [
	z.object({
		type: z.literal(IpcMessageType.Ack),
		origin: z.literal(IpcOrigin.Server),
		data: ackSchema,
	}),
	z.object({
		type: z.literal(IpcMessageType.TaskCommand),
		origin: z.literal(IpcOrigin.Client),
		clientId: z.string(),
		data: taskCommandSchema,
	}),
	z.object({
		type: z.literal(IpcMessageType.TaskEvent),
		origin: z.literal(IpcOrigin.Server),
		relayClientId: z.string().optional(),
		data: taskEventSchema,
	}),
])

export type IpcMessage = z.infer<typeof ipcMessageSchema>

export interface GeneralEventListener<E = Event> {
  (evt: E): void
}

export type EventKeys = keyof HTMLElementEventMap

export type EventTarget = Node | Window

export const off = <EventType = Event>(
  target: EventTarget,
  event: EventKeys,
  handler: GeneralEventListener<EventType>,
) => {
  target.removeEventListener(event, handler as any, false)
}

export const on = <EventType = Event>(
  target: EventTarget,
  event: EventKeys,
  handler: GeneralEventListener<EventType>,
) => {
  target.addEventListener(event, handler as any, false)
  return () => off(target, event, handler as any)
}

export const once = <EventType = Event>(
  target: EventTarget,
  event: EventKeys,
  handler: GeneralEventListener<EventType>,
) => {
  const _handler = (e: Event) => {
    handler(e as any)
    off(target, event, _handler)
  }

  on(target, event, _handler)
}

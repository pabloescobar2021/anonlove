export function parseBackendDate(raw: string): Date {
    if (!raw) return new Date(NaN)

    return new Date(
    raw
      .replace(" ", "T")
      .replace(/\.\d+/, m => m.slice(0, 4)) // миллисекунды → 3 знака
      .replace(/\+00:?00$/, "Z"))            // +00 or +00:00 → Z

}

export function parseDate(date: Date): string {
    return date.toLocaleString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    })
}

export function formatBackendDate(raw: string): string {
    if (!raw) return ""

    const date = new Date(
        raw
            .replace(" ", "T")
            .replace(/\.\d+/, m => m.slice(0, 4))
            .replace(/\+00:?00$/, "Z")
    )

    return date.toLocaleString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    })
}
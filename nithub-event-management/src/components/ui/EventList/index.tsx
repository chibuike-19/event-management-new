import EventsCard from "../EventCard"

type EventListProps = {
    data: Data[],
}

export type Data = {
    id: string
    tag: string
}

export default function EventList({data}: EventListProps) {
    return (
        <div>
            {data.map((row, index) => (
              <EventsCard tag={row.tag} />
            ))}
        </div>
    )
}
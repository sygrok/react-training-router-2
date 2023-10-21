import { Link } from "react-router-dom";

function EventsPage() {
  const DUMMY_EVENTS = [
    { id: "e1", title: "Event1" },
    { id: "e2", title: "Event2" },
  ];

  return (
    <>
      <h1>EventPage</h1>
      <ul>
        {DUMMY_EVENTS.map((x) => (
          <li key={x.id}>
            <Link to={x.id}>{x.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;

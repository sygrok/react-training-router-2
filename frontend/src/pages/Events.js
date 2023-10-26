import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {/* once we have data function below works */}
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );

  //without defer
  // const data = useLoaderData();
  // return (
  //   <>
  //     <EventsList events={data.events} />
  //   </>
  // );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Couldn't fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}

//without defer
// export async function loader() {
//   const response = await fetch("http://localhost:8080/events");

//   if (!response.ok) {

//     throw json({ message: "Couldn't fetch events" }, { status: 500 });
//   } else {
//     return response;
//   }
// }

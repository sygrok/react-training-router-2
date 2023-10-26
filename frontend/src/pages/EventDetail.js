import {
  Outlet,
  json,
  redirect,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  // const params = useParams();
  // const data = useLoaderData();
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      {/* <h1>{params.eventId}</h1> */}
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;

//loader
export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could nor fetch detail for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
}

//delete action for <EventItem />
export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method, //request is defined in <EventItem />
  });

  if (!response.ok) {
    throw json({ message: "Couldn't delete!" }, { status: 500 });
  } else {
    return redirect("/events");
  }
}

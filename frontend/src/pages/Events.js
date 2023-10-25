import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  return (
    <>
      <EventsList events={data.events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/eventss");

  if (!response.ok) {
    // return { isError: true, message: "Couldn't fetch events." };
    throw { message: "Couldn't fetch." };
  } else {
    return response;
    // const resData = await response.json();
    // return resData.events; //events is defined in dummy backend in order to get it we have to speciyf it here
  }
}

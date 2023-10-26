import { useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";
import { useEffect } from "react";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form //if we don't use useFetcher().Form the default behavior of Form would be redirecting us to <NewsletterPage />
      //If you want to interact with some action or a loader without transitioning, use fether
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        name="email"
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
        required
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;

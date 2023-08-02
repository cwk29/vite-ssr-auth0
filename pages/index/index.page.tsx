import { Counter } from "./Counter";
import { LoginButton } from "./LoginButton";

export { Page };

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          <LoginButton />
        </li>
      </ul>
    </>
  );
}

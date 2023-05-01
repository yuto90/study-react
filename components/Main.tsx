import { Head } from "../components/Head";

export function Main(props: { page: string }) {
  return (
    <div>
      <Head page={props.page} />
    </div>
  );
}

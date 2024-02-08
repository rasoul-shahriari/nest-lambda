import axios from "axios";
import Image from "next/image";

export default async function Home() {
  const res = await axios.get("http://localhost:5000/dev/api/second");
  const data = res.data;

  return (
    <div>
      <h1>Data from API</h1>
      <p></p>
      <pre>
        {data.map((d: any) => (
          <p key={d}>{d}</p>
        ))}
      </pre>
    </div>
  );
}

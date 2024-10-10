import Image from "next/image";

export default function About() {
  return (
    <div>
      <h1>{process.env.COMPANY_NAME}</h1>
      <h2>Chayapol Moemeng</h2>
    </div>
  );
}

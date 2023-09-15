"use client"
import { useRouter } from "next/navigation";

export default function RouteButton({buttoneText, route}) {
    const router = useRouter();
    const updateUrl = (route) => {
        router.push(route);
    };

  return (
    <button onClick={()=>{updateUrl(route)}} className="button">
      {buttoneText}
    </button>
  );
}

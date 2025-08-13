import { Card1 } from "@/components/home/card1";
import { Text1 } from "@/components/home/text1";

export default function home() {
  return (
    <>
    <div className="mx-6">
    <div className="flex items-center justify-center min-h-screen">
    <Text1/>
    
    </div>
    <div>
      <Card1/>
    </div>
    </div>
    </>
  )
}
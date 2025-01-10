import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-16 py-16 bg-white"
    >
      <div className="container mx-auto px-6">
        <h2
          id="testimonials-heading"
          className="text-3xl font-bold text-center mb-8"
        >
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="flex flex-col h-full">
            <Card className="h-full flex flex-col">
              <CardContent className="p-6 flex flex-col justify-between flex-1">
                <blockquote className="text-gray-600 mb-4">
                  <p>
                    "Incredible Jiu-Jitsu training! The coach's detailed
                    instruction and the well-structured classes are fantastic.
                    Plus, it's the most welcoming and respectful academy I've
                    ever been to."
                  </p>
                </blockquote>
                <cite className="font-semibold text-gray-900 mt-auto">
                  - Elena, Blue Belt
                </cite>
              </CardContent>
            </Card>
          </article>
          <article className="flex flex-col h-full">
            <Card className="h-full flex flex-col">
              <CardContent className="p-6 flex flex-col justify-between flex-1">
                <blockquote className="text-gray-600 mb-4">
                  <p>
                    "My son has thrived under Scotty's expert instruction and
                    the supportive atmosphere. I highly recommend Bear Bones to
                    any parent looking for a positive and enriching experience
                    for their child."
                  </p>
                </blockquote>
                <cite className="font-semibold text-gray-900 mt-auto">
                  - Sunny, a happy mom
                </cite>
              </CardContent>
            </Card>
          </article>
          <article className="flex flex-col h-full">
            <Card className="h-full flex flex-col">
              <CardContent className="p-6 flex flex-col justify-between flex-1">
                <blockquote className="text-gray-600 mb-4">
                  <p>
                    "After 20 years in Jiu-Jitsu, across many countries and
                    academies, Bear Bones is a rare diamond - my favorite, in
                    fact. Scotty is the best instructor I've had. His attention
                    to detail has rapidly improved my game. The kids' classes
                    are also phenomenal. Highly recommended!"
                  </p>
                </blockquote>
                <cite className="font-semibold text-gray-900 mt-auto">
                  - Leo, Purple Belt
                </cite>
              </CardContent>
            </Card>
          </article>
        </div>
      </div>
    </section>
  );
}

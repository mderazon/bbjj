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
          {[1, 2, 3].map((i) => (
            <article key={i}>
              <Card>
                <CardContent className="p-6">
                  <blockquote className="text-gray-600 mb-4">
                    <p>
                      "Bear Bones Jiujitsu has transformed my life. The
                      instructors are top-notch and the community is amazing!"
                    </p>
                  </blockquote>
                  <cite className="font-semibold text-gray-900">
                    - Happy Student {i}
                  </cite>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

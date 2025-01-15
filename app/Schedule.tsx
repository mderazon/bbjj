import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

export default function Schedule() {
  return (
    <section
      id="schedule"
      aria-labelledby="schedule-heading"
      className="scroll-mt-16 py-16 bg-gray-100"
    >
      <div className="container mx-auto px-6">
        <h2
          id="schedule-heading"
          className="text-3xl font-bold text-center mb-8"
        >
          Class Schedule
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">
                Adults Classes
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                All classes are 90 minutes long
              </p>
              <ul className="space-y-2" aria-label="Adults class schedule">
                <li className="flex items-center">
                  <Clock
                    className="mr-2 text-gray-900"
                    aria-hidden="true"
                    size={20}
                  />{" "}
                  <span className="text-gray-900">Mon-Thu: 6:30 PM (Gi)</span>
                </li>
                <li className="flex items-center">
                  <Clock
                    className="mr-2 text-gray-900"
                    aria-hidden="true"
                    size={20}
                  />{" "}
                  <span className="text-gray-900">Wed: 11:00 AM (Gi)</span>
                </li>
                <li className="flex items-center">
                  <Clock
                    className="mr-2 text-gray-900"
                    aria-hidden="true"
                    size={20}
                  />{" "}
                  <span className="text-gray-900">Fri: 11:00 AM (Gi)</span>
                </li>
                <li className="flex items-center">
                  <Clock
                    className="mr-2 text-gray-900"
                    aria-hidden="true"
                    size={20}
                  />{" "}
                  <span className="text-gray-900">Fri: 6:00 PM (No-Gi)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-green-600">
                Little Bears Kids Classes
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                All classes are 60 minutes long
              </p>
              <ul className="space-y-2" aria-label="Kids class schedule">
                <li className="flex items-center">
                  <Clock
                    className="mr-2 text-gray-900"
                    aria-hidden="true"
                    size={20}
                  />{" "}
                  <span className="text-gray-900">Mon, Tue, Thu: 4:00 PM</span>
                </li>
                <li className="flex items-center">
                  <Clock
                    className="mr-2 text-gray-900"
                    aria-hidden="true"
                    size={20}
                  />{" "}
                  <span className="text-gray-900">Mon, Tue, Thu: 5:00 PM</span>
                </li>
                <li className="flex items-center">
                  <Clock
                    className="mr-2 text-gray-900"
                    aria-hidden="true"
                    size={20}
                  />{" "}
                  <span className="text-gray-900">Wed: 5:30 PM</span>
                </li>
                <li className="flex items-center">
                  <Clock
                    className="mr-2 text-gray-900"
                    aria-hidden="true"
                    size={20}
                  />{" "}
                  <span className="text-gray-900">Fri: 5:00 PM</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

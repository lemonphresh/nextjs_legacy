/* eslint-disable @next/next/no-img-element */
import Container from "@/components/atoms/Container/Container";
import FlowbiteForm from "@/components/organisms/FlowbiteForm/FlowbiteForm";
import { Button } from "@/components/shadcn-ui/button";
import { CogIcon } from "@heroicons/react/24/outline";

interface EventPageProps {
  params: Record<string, string>;
}

export default async function EventPage({ params }: EventPageProps) {
  console.log({ params });
  return (
    <main className="flex container bg-gray-100 min-h-screen flex-col min-w-full p-12 px-5 sm:px-12">
      <Container className="flex flex-col items-center gap-6">
        <img
          className="rounded-md"
          src="https://placehold.co/100x100"
          alt="Placeholder"
        />
        <p className="text-coral-400">
          some text with a custom theme color applied
        </p>
        <Button>Primary</Button>
        <Button circular={false} variant="secondary">
          Secondary
        </Button>
        <Button variant="gold">Gold</Button>
        <Button variant="clear">Clear</Button>
        <Button
          className="bg-seaFoam-300 p-3"
          icon={<CogIcon className="w-5 h-5" />}
        />
        <Button
          className="bg-seaFoam-600 p-3"
          icon={<CogIcon className="w-5 h-5" />}
        >
          With Text
        </Button>
        <Button
          className="bg-coral-600 p-3"
          icon={<CogIcon className="w-5 h-5" />}
          iconPosition="right"
        >
          With Text
        </Button>
      </Container>

      <FlowbiteForm />
    </main>
  );
}

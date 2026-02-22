import { steps, getStepById } from "@/lib/steps";
import { ShareCard } from "@/components/ShareCard";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface StepPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return steps.map((step) => ({
    id: step.id.toString(),
  }));
}

export async function generateMetadata({ params }: StepPageProps): Promise<Metadata> {
  const step = getStepById(parseInt(params.id));
  
  if (!step) {
    return {
      title: "Step Not Found | The Twelve",
    };
  }

  return {
    title: `Step ${step.id} | The Twelve`,
    description: step.title,
    openGraph: {
      title: `Step ${step.id}: ${step.roman} | The Twelve`,
      description: step.title,
    },
  };
}

export default function StepPage({ params }: StepPageProps) {
  const stepId = parseInt(params.id);
  const step = getStepById(stepId);

  if (!step) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <a 
            href="/" 
            className="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors text-sm font-display tracking-wide"
          >
            ← Back to All Steps
          </a>
        </nav>

        <ShareCard step={step} />

        {/* Navigation between steps */}
        <div className="flex justify-between mt-8">
          {stepId > 1 ? (
            <a
              href={`/step/${stepId - 1}`}
              className="px-4 py-2 text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors text-sm font-display"
            >
              ← Step {stepId - 1}
            </a>
          ) : (
            <span />
          )}
          
          {stepId < 12 ? (
            <a
              href={`/step/${stepId + 1}`}
              className="px-4 py-2 text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors text-sm font-display"
            >
              Step {stepId + 1} →
            </a>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
}

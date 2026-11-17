import { CheckCircle2, Circle } from 'lucide-react';

export default function StepList({ steps = [], currentStep = 0 }) {
  return (
    <div className="space-y-3 mt-4">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <div 
            key={index} 
            className={`flex items-start gap-3 p-3 rounded-livora border-2 transition-colors ${
              isActive ? 'border-livora-green bg-livora-green/10' : 
              isCompleted ? 'border-transparent bg-livora-sand/30' : 
              'border-transparent bg-white opacity-60'
            }`}
          >
            <div className="shrink-0 mt-0.5">
              {isCompleted ? (
                <CheckCircle2 className="text-livora-green" size={24} />
              ) : (
                <Circle className={isActive ? "text-livora-green-dark" : "text-livora-tan"} size={24} />
              )}
            </div>
            <div>
              <p className={`font-semibold ${isActive ? 'text-livora-green-dark' : 'text-livora-ink'}`}>
                {index + 1}. {step}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
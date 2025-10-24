import { ShaderAnimation } from '@/components/shader-animation';
import { CustomWaitlist } from '@/components/CustomWaitlist';

export default function WaitlistPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Shader Background */}
      <div className="absolute inset-0 z-0">
        <ShaderAnimation />
      </div>
      
      {/* Waitlist Content */}
      <div className="relative z-10">
        <CustomWaitlist />
      </div>
    </div>
  );
}

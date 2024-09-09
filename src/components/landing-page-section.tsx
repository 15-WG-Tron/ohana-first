/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/n4QgCCrnC98
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Rubik } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function LandingPageSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              STRENGTHENING 'OHANA
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Strengthening Our Family
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <OptionIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    O - Opportunity for Alliance
                  </h3>
                  <p className="text-muted-foreground">
                    Creating opportunities for agencies and organizations to
                    work together and support families.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <HandHelpingIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    H - Helping Agencies Focus
                  </h3>
                  <p className="text-muted-foreground">
                    Assisting agencies in aligning their efforts to better serve
                    the needs of families.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <AccessibilityIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    A - Access to Information
                  </h3>
                  <p className="text-muted-foreground">
                    Providing families with easy access to resources and
                    information to support their well-being.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <NetworkIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    N - Network to Thrive
                  </h3>
                  <p className="text-muted-foreground">
                    Fostering a strong network of support to help families and
                    communities thrive.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <PowerIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    A - Always Supporting the Total Force
                  </h3>
                  <p className="text-muted-foreground">
                    Providing unwavering support to military families and the
                    broader community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccessibilityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  );
}

function HandHelpingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
      <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 13 6 6" />
    </svg>
  );
}

function NetworkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

function OptionIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3h6l6 18h6" />
      <path d="M14 3h7" />
    </svg>
  );
}

function PowerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  );
}

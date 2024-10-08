/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/gk6NAvYzUpI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Chivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { CONFIG } from "@/config/config";
import { EUri } from "@/const/enums";
import Link from "next/link";
import { DirectoryAgencyDetails } from "@/types";

export function Directory() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: agencies } = useQuery({
    queryKey: ["agencies"],
    queryFn: async () => {
      const response = await fetch(CONFIG.ADMIN_URL + EUri.DIRECTORY);

      if (!response.ok) {
        throw new Error(
          "There was an error fetching the data. Please try again",
        );
      }

      return response.json();
    },
  });

  const filteredAgencies: DirectoryAgencyDetails[] = agencies?.data.filter(
    (agency) =>
      agency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agency.location.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold md:text-5xl mb-4">Directory</h1>
      <div className="mb-8">
        <Input
          placeholder="Search agencies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAgencies?.map((agency) => (
          <Card key={agency.id}>
            <CardContent>
              <h3 className="text-lg font-semibold pt-2">{agency.name}</h3>

              <p className="text-muted-foreground">{agency.location}</p>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4" />
                  <Link href={`tel:${agency.phoneNumber}`}>
                    {agency.phoneNumber}
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  {agency.altPhoneNumber ? (
                    <>
                      <PhoneIcon className="w-4 h-4" />
                      <Link href={`tel:${agency.altPhoneNumber}`}>
                        {agency.altPhoneNumber}
                      </Link>
                    </>
                  ) : null}
                </div>
                <div className="flex items-center gap-2">
                  <MailOpenIcon className="w-4 h-4" />
                  <Link href={`mailto:${agency.email}`}>{agency.email}</Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function MailOpenIcon(props) {
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
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  );
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

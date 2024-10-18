import { HomeIcon } from "@/components/home-icon";
import { PlanDetailCard, PlanDetailCardProps } from "./plan-detail-card";
import { HospitalIcon } from "@/components/hospital-icon";

const planDetails: PlanDetailCardProps[] = [
  {
    title: "Plan en Casa",
    icon: <HomeIcon className="h-14 w-14" />,
    monthlyPrice: "$39",
    details: [
      <p>
        <strong>Médico general a domicilio</strong> por S/20 y medicinas cubiertas al 100%.
      </p>,
      <p>
        <strong>Videoconsulta</strong> y orientación telefónica al 100% en medicina general +
        pediatría.
      </p>,
      <p>
        <strong>Indemnización</strong> de S/300 en caso de hospitalización por más de un día.
      </p>,
    ],
  },
  {
    title: "Plan en Casa y Clínica",
    icon: <HospitalIcon className="h-14 w-14" />,
    monthlyPrice: "$99",
    details: [
      <p>
        <strong>Consultas en clínica</strong> para cualquier especialidad.
      </p>,
      <p>
        <strong>Medicinas y exámenes</strong> derivados cubiertos al 80%
      </p>,
      <p>
        Atención médica en <strong>más de 200 clínicas del país</strong>.
      </p>,
    ],
  },
  {
    title: "Plan en Casa + Chequeo",
    icon: <HomeIcon className="h-14 w-14" />,
    monthlyPrice: "$149",
    details: [
      <p>
        Un <strong>Chequeo preventivo general</strong> de manera presencial o virtual.
      </p>,
      <p>
        Acceso a <strong>Vacunas</strong> en el Programa del MINSA en centros privados.
      </p>,
      <p>
        <strong>Incluye todos los beneficios del Plan en Casa. </strong>
      </p>,
    ],
  },
];

export function PlanDetailsCards() {
  return (
    <div className="scroll flex gap-4 overflow-x-auto scroll-smooth px-2 py-4">
      {planDetails.map((planDetail, index) => (
        <PlanDetailCard key={index} {...planDetail} />
      ))}
    </div>
  );
}

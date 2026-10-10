/**
 * Industries Served Catalog - Parashar Micro Measurement Pvt. Ltd.
 * 
 * NOTE FOR DEVELOPER:
 * These represent potential industrial sectors and customer segments commonly requiring
 * calibration services in the Delhi-NCR / Noida industrial corridor.
 * These are NOT confirmed client rosters or exclusive specializations.
 */

export const industriesServed = [
  {
    id: "manufacturing-machining",
    title: "Manufacturing & Precision Machining",
    iconName: "Cog",
    statusNote: "Potential Sector",
    summary: "Precision tolerance compliance for CNC milling, turning, sheet metal, and industrial machinery assembly.",
    application: "Ensuring dimensional tooling (calipers, micrometers, dial gauges) prevent part rejection and maintain ISO standard conformance.",
    keyNeeds: [
      "Interchangeability of machined parts",
      "Regular recalibration schedules for production floor tools",
      "Traceable documentation for vendor audits"
    ]
  },
  {
    id: "automotive-ancillary",
    title: "Automotive & Auto Components",
    iconName: "Car",
    statusNote: "Potential Sector",
    summary: "High-volume Tier-1 and Tier-2 automotive component manufacturers adhering to rigorous quality benchmarks.",
    application: "Calibration of torque wrenches, pressure gauges on hydraulic presses, and dimensional checking fixtures.",
    keyNeeds: [
      "Rigid tolerance standards (IATF / ISO compliance)",
      "Periodic calibration tracking to avoid production halts",
      "Fast turnaround times to minimize line downtime"
    ]
  },
  {
    id: "engineering-fabrication",
    title: "Heavy Engineering & Fabrication",
    iconName: "Hammer",
    statusNote: "Potential Sector",
    summary: "Structural steel, pressure vessels, boilers, piping, and industrial equipment fabrication units.",
    application: "Pressure transmitter testing, weld inspection gauge calibration, and temperature controller validation.",
    keyNeeds: [
      "Hydro-test pressure gauge verification",
      "Thermal treatment temperature controller monitoring",
      "Sturdy verification documentation for safety compliance"
    ]
  },
  {
    id: "electrical-electronics",
    title: "Electrical & Electronics Manufacturing",
    iconName: "Cpu",
    statusNote: "Potential Sector",
    summary: "PCB assembly, control panel manufacturing, transformer winding, and electrical equipment builders.",
    application: "Calibration of multimeters, clamp meters, insulation resistance testers, and power analyzers.",
    keyNeeds: [
      "Electrical safety standard verifications",
      "Voltage/current accuracy on testing benches",
      "Prevention of insulation failure in electrical switchgear"
    ]
  },
  {
    id: "pharma-lab",
    title: "Pharmaceutical & Chemical Laboratories",
    iconName: "FlaskConical",
    statusNote: "Potential Sector",
    summary: "R&D facilities, formulation units, and chemical testing operations with strict batch controls.",
    application: "Analytical weighing balance calibration, thermal chamber mapping probes, and autoclave pressure gauges.",
    keyNeeds: [
      "Micro-accuracy on precision weighing equipment",
      "Temperature uniformity validation",
      "Audit-ready calibration certificates with test points"
    ]
  },
  {
    id: "quality-inspection",
    title: "Quality Assurance & Inspection Bodies",
    iconName: "ShieldCheck",
    statusNote: "Potential Sector",
    summary: "Third-party inspection agencies, internal QA departments, and contract testing facilities.",
    application: "Secondary standard checking and periodic reverification of QA reference master gauges.",
    keyNeeds: [
      "Clear calibration certificates with measurement errors recorded",
      "Adherence to documented calibration procedures",
      "Clear communication on calibration uncertainty"
    ]
  }
];

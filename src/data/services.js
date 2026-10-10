/**
 * Calibration Services Catalog - Parashar Micro Measurement Pvt. Ltd.
 * 
 * IMPORTANT DEVELOPER NOTICE:
 * The services below represent PROPOSED categories structured for initial layout & quotation inquiry.
 * Specific measurement ranges, calibration uncertainty (CMC), and laboratory parameters are subject
 * to formal confirmation by Parashar Micro Measurement laboratory management.
 * Each entry includes an `isConfirmedScope` flag to distinguish verified capabilities.
 */

export const calibrationServices = [
  {
    id: "dimensional-calibration",
    slug: "dimensional",
    title: "Dimensional Instrument Calibration",
    iconName: "Ruler",
    badge: "Proposed Category",
    isConfirmedScope: false, // Flag for developer/client verification
    shortDescription: "Precision calibration of linear, angular, and dimensional inspection tools used in machining and manufacturing.",
    description: "Accurate dimensional measurement is essential for interchangeability and tolerance control in production. We calibrate a wide array of linear, internal, external, and reference dimensional gauges.",
    typicalInstruments: [
      "Vernier Calipers & Digital Calipers",
      "External & Internal Micrometers",
      "Dial Indicators & Bore Gauges",
      "Height Gauges & Depth Gauges",
      "Plugs, Rings & Thread Gauges",
      "Gauge Blocks (Slip Gauges)"
    ],
    calibrationFocus: "Zero error verification, parallelism, repeatability, and linearity checks against master standards.",
    developerNote: "Proposed category. Verify exact dimensional measuring range and laboratory uncertainty parameters."
  },
  {
    id: "pressure-calibration",
    slug: "pressure",
    title: "Pressure Instrument Calibration",
    iconName: "Gauge",
    badge: "Proposed Category",
    isConfirmedScope: false,
    shortDescription: "Systematic calibration of industrial pressure, vacuum, and differential pressure measurement devices.",
    description: "Reliable pressure reading is critical for safety-critical plant processes, pneumatic systems, and hydraulic equipment. Our calibration procedures evaluate span, linearity, and hysteresis across pressure ranges.",
    typicalInstruments: [
      "Dial & Digital Pressure Gauges",
      "Vacuum & Compound Gauges",
      "Pressure Transmitters & Transducers",
      "Differential Pressure (DP) Gauges",
      "Manometers & Pressure Switches",
      "Deadweight Tester Verifications"
    ],
    calibrationFocus: "Multi-point ascending and descending calibration runs to evaluate hysteresis, repeatability, and gauge response.",
    developerNote: "Proposed category. Confirm hydraulic/pneumatic test media and maximum pressure bar/PSI limit with laboratory team."
  },
  {
    id: "temperature-calibration",
    slug: "temperature",
    title: "Temperature Instrument Calibration",
    iconName: "Thermometer",
    badge: "Proposed Category",
    isConfirmedScope: false,
    shortDescription: "Thermal sensor and instrument calibration for controlled process temperatures and thermal chambers.",
    description: "Thermal deviation impacts material properties and batch consistency. We service temperature sensors, indicators, and controllers using precision bath and dry-block comparison methods.",
    typicalInstruments: [
      "RTD Pt100 / Pt1000 Sensors",
      "Thermocouples (J, K, T, R, S, B)",
      "Digital Temperature Indicators & Controllers",
      "Glass Stem & Bimetallic Thermometers",
      "Infrared Non-contact Thermometers",
      "Environmental Chamber Data Loggers"
    ],
    calibrationFocus: "Comparison against calibrated master reference probes across operating thermal setpoints.",
    developerNote: "Proposed category. Clarify dry block / liquid bath operating range (-40°C to 1200°C) with laboratory."
  },
  {
    id: "electrical-calibration",
    slug: "electrical",
    title: "Electrical Measuring Instrument Calibration",
    iconName: "Zap",
    badge: "Proposed Category",
    isConfirmedScope: false,
    shortDescription: "Calibration of standard electrical parameters including voltage, current, resistance, and continuity instruments.",
    description: "Ensuring that multimeters, insulation meters, and panel instruments deliver faithful electrical measurements for maintenance, electronic assembly, and power distribution inspection.",
    typicalInstruments: [
      "Digital Multimeters (3.5 to 6.5 Digit)",
      "AC/DC Clamp Meters",
      "Insulation Resistance Testers (Megohmmeters)",
      "Earth Resistance Testers",
      "Process Calibrators & 4-20mA Simulators",
      "Panel Voltmeters, Ammeters & Frequency Meters"
    ],
    calibrationFocus: "Direct source and measurement comparison for DC/AC voltage, current, and standard resistance decade standards.",
    developerNote: "Proposed category. Confirm multi-product calibrator model and accuracy specifications."
  },
  {
    id: "weighing-calibration",
    slug: "weighing",
    title: "Weighing Instrument Calibration",
    iconName: "Scale",
    badge: "Proposed Category",
    isConfirmedScope: false,
    shortDescription: "Verification and calibration of precision balances, industrial scales, and standard reference test weights.",
    description: "From laboratory analytical balances to factory floor platform scales, our procedures verify corner loading (eccentricity), linearity, and repeatability using certified reference weights.",
    typicalInstruments: [
      "Precision Analytical Balances (mg range)",
      "Top-Loading Laboratory Balances",
      "Industrial Platform Weighing Scales",
      "Standard Test Weights & Mass Standards",
      "Crane Scales & Hanging Balances",
      "Moisture Analyzers"
    ],
    calibrationFocus: "Eccentricity (corner load), repeatability at half & full capacity, and linearity tests.",
    developerNote: "Proposed category. Verify standard mass classes (E2, F1, M1) available in laboratory."
  },
  {
    id: "other-measurement-services",
    slug: "other-measurement",
    title: "Other Measurement & Testing Services",
    iconName: "SlidersHorizontal",
    badge: "Proposed Category",
    isConfirmedScope: false,
    shortDescription: "Specialized calibration and dimensional verification for specialized industrial tools and inspection fixtures.",
    description: "Custom testing support for production tooling, surface flatness evaluation, optical inspection, and tailored metrology documentation for special quality audits.",
    typicalInstruments: [
      "Granite Surface Plate Flatness Inspections",
      "Profile Projectors & Optical Comparators",
      "Force Gauges & Torque Wrenches",
      "Tachometers & Stroboscopes",
      "Sound Level Meters & Lux Meters",
      "Custom Production Jigs & Fixtures"
    ],
    calibrationFocus: "Specialized comparison protocols adapted to customer quality assurance manuals and drawing tolerances.",
    developerNote: "Proposed category. Requires case-by-case review by laboratory engineering head."
  }
];

export const getServiceBySlug = (slug) => {
  return calibrationServices.find(s => s.slug === slug || s.id === slug);
};

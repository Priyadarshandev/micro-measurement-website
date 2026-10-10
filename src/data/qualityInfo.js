/**
 * Quality, Procedures & Accreditation Policy - Parashar Micro Measurement Pvt. Ltd.
 * 
 * STRICT COMPLIANCE NOTE:
 * - No fabricated claims of NABL accreditation, ISO 17025 certification numbers, or master standard certificates.
 * - This file displays transparent, neutral information regarding calibration methodology, documentation,
 *   and provides exact placeholders where the company can add verified accreditation certificates.
 */

export const qualityPolicy = {
  headline: "Quality Standards & Calibration Documentation",
  subheading: "Transparent, systematic calibration procedures designed to satisfy industrial quality audit requirements.",
  
  // Mandatory neutral disclaimer per specification
  neutralNotice: "Contact our team to learn more about our applicable calibration capabilities, quality procedures, and documentation.",
  
  accreditationStatus: {
    isVerifiedNabl: false, // Set to true ONLY when official certificate & scope are uploaded
    badge: "Official Details on Request",
    title: "Accreditation & Quality Verification",
    description: "At Parashar Micro Measurement Pvt. Ltd., we uphold structured metrology practices. If your procurement or QA policy requires specific formal accreditation certificates, CMC values, or traceability audit packs, please contact our laboratory coordinator directly."
  },

  principles: [
    {
      title: "Documented Calibration Procedures",
      description: "Calibration activities follow structured technical procedures with established reference points, multi-cycle readings, and zero verification.",
      icon: "FileText"
    },
    {
      title: "Traceable Reference Masters",
      description: "Working reference instruments are periodically verified against recognized secondary or national measurement standards.",
      icon: "GitBranch"
    },
    {
      title: "Controlled Laboratory Environment",
      description: "Precision measurements are conducted under monitored ambient temperature and humidity conditions to minimize thermal expansion errors.",
      icon: "ThermometerSnowflake"
    },
    {
      title: "Comprehensive Calibration Reports",
      description: "Every calibrated instrument is accompanied by a formal report detailing observed errors, environmental conditions, and due dates.",
      icon: "Award"
    }
  ],

  certificateFeatures: [
    "Customer identification & complete instrument description (Make, Model, Serial No.)",
    "Details of reference standards utilized with their respective calibration validity",
    "Environmental conditions during calibration (Ambient Temperature & RH)",
    "Tabulated As-Found and As-Left measurement observations",
    "Calculated measurement deviation and applicable tolerance limits",
    "Calibration Date and recommended Recalibration Due Date",
    "Authorized signatory and technical reviewer sign-offs"
  ],

  howToVerify: [
    {
      step: "1",
      title: "Specify Your Technical Standard",
      detail: "Share your internal QA criteria, plant quality manual requirements, or ISO/IATF audit specifications."
    },
    {
      step: "2",
      title: "Review Laboratory Scope Schedule",
      detail: "Our team will confirm whether the required instrument type, range, and tolerance fall within our confirmed calibration schedule."
    },
    {
      step: "3",
      title: "Receive Validated Documentation",
      detail: "Obtain formal calibration certificates with traceable master details for your audit records."
    }
  ]
};

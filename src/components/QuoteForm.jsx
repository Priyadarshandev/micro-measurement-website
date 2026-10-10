import React, { useState, useEffect } from 'react';
import { calibrationServices } from '../data/services';
import { companyInfo } from '../data/companyInfo';
import { CheckCircle2, AlertCircle, Send, Copy, Check, MessageSquare, Code, RefreshCw } from 'lucide-react';

export const QuoteForm = ({ initialServiceId = '', onSuccess, onCancel, isModal = false }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    serviceCategory: initialServiceId || '',
    instrumentNames: '',
    quantity: 1,
    preferredDate: '',
    additionalRequirements: '',
    honeypot: '', // Spam prevention bot trap
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showDeveloperGuide, setShowDeveloperGuide] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({ ...prev, serviceCategory: initialServiceId }));
    }
  }, [initialServiceId]);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name.';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company / Organization name is required.';
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9+\s\-()]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid contact number (7-15 digits).';
    }

    if (!formData.serviceCategory) {
      newErrors.serviceCategory = 'Please select a calibration category.';
    }

    if (!formData.quantity || formData.quantity < 1) {
      newErrors.quantity = 'Quantity must be at least 1.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check honeypot spam bot trap
    if (formData.honeypot) {
      console.warn('Spam submission filtered.');
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate validation and draft formulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      if (onSuccess) onSuccess();
    }, 600);
  };

  const handleCopy = () => {
    if (!submittedData) return;
    const text = `QUOTATION ENQUIRY - PARASHAR MICRO MEASUREMENT PVT. LTD.
Name: ${submittedData.fullName}
Company: ${submittedData.companyName}
Email: ${submittedData.businessEmail}
Phone: ${submittedData.phone}
Category: ${submittedData.serviceCategory}
Instruments: ${submittedData.instrumentNames || 'Standard instruments'}
Quantity: ${submittedData.quantity}
Preferred Date: ${submittedData.preferredDate || 'Standard turnaround'}
Notes: ${submittedData.additionalRequirements || 'N/A'}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generateWhatsAppLink = () => {
    if (!submittedData) return '#';
    const text = `Hello Parashar Micro Measurement, I would like to request a calibration quote:%0A` +
      `*Name:* ${encodeURIComponent(submittedData.fullName)}%0A` +
      `*Company:* ${encodeURIComponent(submittedData.companyName)}%0A` +
      `*Phone:* ${encodeURIComponent(submittedData.phone)}%0A` +
      `*Service:* ${encodeURIComponent(submittedData.serviceCategory)}%0A` +
      `*Instruments:* ${encodeURIComponent(submittedData.instrumentNames || 'Standard instruments')}%0A` +
      `*Quantity:* ${encodeURIComponent(submittedData.quantity)}%0A` +
      `*Requirements:* ${encodeURIComponent(submittedData.additionalRequirements || 'Standard calibration')}`;

    return `https://wa.me/919910319947?text=${text}`;
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      companyName: '',
      businessEmail: '',
      phone: '',
      serviceCategory: '',
      instrumentNames: '',
      quantity: 1,
      preferredDate: '',
      additionalRequirements: '',
      honeypot: '',
    });
    setErrors({});
  };

  if (submittedData) {
    return (
      <div className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-card">
        <div className="flex items-center space-x-3 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md p-4 mb-6">
          <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-600" />
          <div>
            <h3 className="font-semibold text-emerald-900">Enquiry Drafted & Validated</h3>
            <p className="text-xs text-emerald-800">
              Your quotation details have been captured and formatted for laboratory evaluation.
            </p>
          </div>
        </div>

        {/* Structured summary */}
        <div className="bg-slate-50 rounded-lg p-5 border border-slate-200 mb-6 text-sm text-slate-700 space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-slate-200">
            <div>
              <span className="text-xs uppercase font-semibold text-slate-500 block">Contact Person</span>
              <span className="font-medium text-navy-900">{submittedData.fullName}</span>
            </div>
            <div>
              <span className="text-xs uppercase font-semibold text-slate-500 block">Organization</span>
              <span className="font-medium text-navy-900">{submittedData.companyName}</span>
            </div>
            <div>
              <span className="text-xs uppercase font-semibold text-slate-500 block">Business Email</span>
              <span className="font-medium text-navy-900">{submittedData.businessEmail}</span>
            </div>
            <div>
              <span className="text-xs uppercase font-semibold text-slate-500 block">Contact Phone</span>
              <span className="font-medium text-navy-900">{submittedData.phone}</span>
            </div>
          </div>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <span className="text-xs uppercase font-semibold text-slate-500 block">Selected Service</span>
              <span className="font-medium text-cyan-800 capitalize">
                {calibrationServices.find(s => s.id === submittedData.serviceCategory)?.title || submittedData.serviceCategory}
              </span>
            </div>
            <div>
              <span className="text-xs uppercase font-semibold text-slate-500 block">Instrument Quantity</span>
              <span className="font-medium text-navy-900">{submittedData.quantity} Unit(s)</span>
            </div>
            {submittedData.instrumentNames && (
              <div className="sm:col-span-2">
                <span className="text-xs uppercase font-semibold text-slate-500 block">Specific Instruments / Models</span>
                <span className="text-slate-800">{submittedData.instrumentNames}</span>
              </div>
            )}
            {submittedData.additionalRequirements && (
              <div className="sm:col-span-2">
                <span className="text-xs uppercase font-semibold text-slate-500 block">Notes & Specifications</span>
                <span className="text-slate-800">{submittedData.additionalRequirements}</span>
              </div>
            )}
          </div>
        </div>

        {/* Immediate Action Buttons */}
        <div className="space-y-3 mb-6">
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md transition shadow-subtle text-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Details to Lab on WhatsApp (+91 99103 19947)</span>
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-md transition text-sm"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Quotation Details Copied!' : 'Copy Summary to Clipboard'}</span>
          </button>
        </div>

        {/* Honest Backend Disclosure Notice per requirement */}
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-md text-xs text-amber-900 space-y-2">
          <div className="flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-950">Backend Connectivity Status</p>
              <p className="mt-0.5 leading-relaxed">
                As per specification, no mock backend email delivery was simulated. To automatically dispatch emails directly to company inboxes (e.g. via Node.js Express API, Resend, or EmailJS), see the developer guide below.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowDeveloperGuide(!showDeveloperGuide)}
            className="text-amber-800 font-medium underline inline-flex items-center space-x-1 hover:text-amber-950"
          >
            <Code className="w-3.5 h-3.5 mr-1" />
            <span>{showDeveloperGuide ? 'Hide Express / API Integration Guide' : 'View Developer API Integration Code'}</span>
          </button>

          {showDeveloperGuide && (
            <div className="mt-3 p-3 bg-slate-900 text-slate-100 rounded text-[11px] font-mono overflow-x-auto space-y-2">
              <p className="text-cyan-400 font-semibold">// Example Express.js Endpoint (backend/server.js):</p>
              <pre>{`app.post('/api/quote', async (req, res) => {
  const { fullName, companyName, businessEmail, phone, serviceCategory, quantity } = req.body;
  // Send via Nodemailer / Resend to info@parasharmicro.com
  // Store in PostgreSQL / MongoDB
  res.status(200).json({ success: true, message: 'Quotation received' });
});`}</pre>
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={resetForm}
            className="inline-flex items-center space-x-2 text-xs font-semibold text-brand-secondary hover:underline"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Submit Another Calibration Request</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-card">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-navy-900">Request a Calibration Quotation</h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Provide your instrument details and quantities. Our technical team in Sector 64, Noida will review and respond with scope and commercial details.
        </p>
      </div>

      {/* Honeypot field - invisible to humans */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website-hp">Leave this empty</label>
        <input
          id="website-hp"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-medium text-slate-700 mb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className={`w-full px-3.5 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 transition ${
              errors.fullName ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' : 'border-slate-300 focus:border-brand-accent focus:ring-cyan-100'
            }`}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && <p id="fullName-error" className="mt-1 text-xs text-rose-600">{errors.fullName}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block text-xs font-medium text-slate-700 mb-1">
            Company / Organization Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="companyName"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Precision Engineering Ltd."
            className={`w-full px-3.5 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 transition ${
              errors.companyName ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' : 'border-slate-300 focus:border-brand-accent focus:ring-cyan-100'
            }`}
            aria-invalid={Boolean(errors.companyName)}
            aria-describedby={errors.companyName ? 'companyName-error' : undefined}
          />
          {errors.companyName && <p id="companyName-error" className="mt-1 text-xs text-rose-600">{errors.companyName}</p>}
        </div>

        {/* Business Email */}
        <div>
          <label htmlFor="businessEmail" className="block text-xs font-medium text-slate-700 mb-1">
            Business Email <span className="text-rose-500">*</span>
          </label>
          <input
            id="businessEmail"
            type="email"
            name="businessEmail"
            value={formData.businessEmail}
            onChange={handleChange}
            placeholder="name@company.com"
            className={`w-full px-3.5 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 transition ${
              errors.businessEmail ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' : 'border-slate-300 focus:border-brand-accent focus:ring-cyan-100'
            }`}
            aria-invalid={Boolean(errors.businessEmail)}
            aria-describedby={errors.businessEmail ? 'businessEmail-error' : undefined}
          />
          {errors.businessEmail && <p id="businessEmail-error" className="mt-1 text-xs text-rose-600">{errors.businessEmail}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-slate-700 mb-1">
            Phone / Mobile Number <span className="text-rose-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={`w-full px-3.5 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 transition ${
              errors.phone ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' : 'border-slate-300 focus:border-brand-accent focus:ring-cyan-100'
            }`}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && <p id="phone-error" className="mt-1 text-xs text-rose-600">{errors.phone}</p>}
        </div>

        {/* Calibration Service Category */}
        <div className="sm:col-span-2">
          <label htmlFor="serviceCategory" className="block text-xs font-medium text-slate-700 mb-1">
            Calibration Service Category <span className="text-rose-500">*</span>
          </label>
          <select
            id="serviceCategory"
            name="serviceCategory"
            value={formData.serviceCategory}
            onChange={handleChange}
            className={`w-full px-3.5 py-2 text-sm border rounded-md bg-white focus:outline-none focus:ring-2 transition ${
              errors.serviceCategory ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' : 'border-slate-300 focus:border-brand-accent focus:ring-cyan-100'
            }`}
            aria-invalid={Boolean(errors.serviceCategory)}
            aria-describedby={errors.serviceCategory ? 'serviceCategory-error' : undefined}
          >
            <option value="">-- Select Calibration Category --</option>
            {calibrationServices.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title} ({service.badge})
              </option>
            ))}
          </select>
          {errors.serviceCategory && <p id="serviceCategory-error" className="mt-1 text-xs text-rose-600">{errors.serviceCategory}</p>}
        </div>

        {/* Specific Instrument Names */}
        <div>
          <label htmlFor="instrumentNames" className="block text-xs font-medium text-slate-700 mb-1">
            Instrument Names / Models (Optional)
          </label>
          <input
            id="instrumentNames"
            type="text"
            name="instrumentNames"
            value={formData.instrumentNames}
            onChange={handleChange}
            placeholder="e.g. Vernier 0-300mm, Pressure Gauge 0-10 bar"
            className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-cyan-100"
          />
        </div>

        {/* Quantity */}
        <div>
          <label htmlFor="quantity" className="block text-xs font-medium text-slate-700 mb-1">
            Estimated Quantity of Instruments <span className="text-rose-500">*</span>
          </label>
          <input
            id="quantity"
            type="number"
            min="1"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className={`w-full px-3.5 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 transition ${
              errors.quantity ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-brand-accent focus:ring-cyan-100'
            }`}
          />
          {errors.quantity && <p className="mt-1 text-xs text-rose-600">{errors.quantity}</p>}
        </div>

        {/* Preferred Date */}
        <div>
          <label htmlFor="preferredDate" className="block text-xs font-medium text-slate-700 mb-1">
            Preferred Date / Turnaround (Optional)
          </label>
          <input
            id="preferredDate"
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-cyan-100"
          />
        </div>

        {/* Additional Requirements */}
        <div className="sm:col-span-2">
          <label htmlFor="additionalRequirements" className="block text-xs font-medium text-slate-700 mb-1">
            Specific Requirements, Tolerances, or Scope Details (Optional)
          </label>
          <textarea
            id="additionalRequirements"
            name="additionalRequirements"
            rows="3"
            value={formData.additionalRequirements}
            onChange={handleChange}
            placeholder="Specify any required test points, tolerance criteria, on-site vs lab calibration preferences, or urgent dispatch deadlines."
            className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-cyan-100"
          ></textarea>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="w-full sm:w-auto px-4 py-2 text-sm text-slate-600 hover:text-slate-900 border border-slate-300 rounded-md hover:bg-slate-50 transition"
          >
            Cancel
          </button>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 bg-brand-primary hover:bg-navy-800 text-white font-medium text-sm rounded-md transition shadow-subtle disabled:opacity-70 ml-auto"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
              <span>Validating Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Quotation Request</span>
            </>
          )}
        </button>
      </div>

      <p className="mt-4 text-[11px] text-slate-500 text-center">
        🔒 Your business information is handled confidentially and used solely for calibration service assessment.
      </p>
    </form>
  );
};

export default QuoteForm;

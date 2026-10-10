import React from 'react';
import {
  Ruler,
  Gauge,
  Thermometer,
  Zap,
  Scale,
  SlidersHorizontal,
  Cog,
  Car,
  Hammer,
  Cpu,
  FlaskConical,
  ShieldCheck,
  FileText,
  GitBranch,
  ThermometerSnowflake,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Info,
  AlertTriangle,
  Menu,
  X,
  Send,
  MessageSquare,
  HelpCircle
} from 'lucide-react';

const iconMap = {
  Ruler,
  Gauge,
  Thermometer,
  Zap,
  Scale,
  SlidersHorizontal,
  Cog,
  Car,
  Hammer,
  Cpu,
  FlaskConical,
  ShieldCheck,
  FileText,
  GitBranch,
  ThermometerSnowflake,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Info,
  AlertTriangle,
  Menu,
  X,
  Send,
  MessageSquare,
  HelpCircle
};

export const DynamicIcon = ({ name, className = "w-5 h-5", ...props }) => {
  const IconComponent = iconMap[name] || HelpCircle;
  return <IconComponent className={className} {...props} />;
};

export default DynamicIcon;

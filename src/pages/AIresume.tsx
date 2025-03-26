import { useState, useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

interface WorkExperience {
  jobTitle: string;
  cityTown: string;
  employer: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  currentlyWorking: boolean;
}

interface Education {
  degree: string;
  cityTown: string;
  school: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  currentlyStudying: boolean;
}

const AIresume = () => {
  const skillsList = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python",
    "Java", "C++", "SQL", "HTML", "CSS",
    "AWS", "Docker", "Git", "Agile", "DevOps",
    "Data Analysis", "Machine Learning", "UI/UX Design", "Project Management"
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = Array.from({ length: 30 }, (_, i) => (new Date().getFullYear() - i).toString());

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    jobTitle: "",
    education: "",
    achievements: ""
  });

  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([{
    jobTitle: "",
    cityTown: "",
    employer: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    currentlyWorking: false
  }]);

  const [educationList, setEducationList] = useState<Education[]>([{
    degree: "",
    cityTown: "",
    school: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    currentlyStudying: false
  }]);

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const resumeRef = useRef(null); // Reference for PDF generation

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const steps = [
    { number: 1, title: "Personal Info" },
    { number: 2, title: "Work Experience" },
    { number: 3, title: "Education" },
    { number: 4, title: "Skills" },
    { number: 5, title: "Preview" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillSelect = (value: string) => {
    if (selectedSkills.includes(value)) {
      return;
    }
    if (selectedSkills.length >= 5) {
      alert("You can select a maximum of 5 skills");
      return;
    }
    setSelectedSkills([...selectedSkills, value]);
  };

  const removeSkill = (skillToRemove: string) => {
    setSelectedSkills(selectedSkills.filter(skill => skill !== skillToRemove));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    // Generate PDF after submission
    generatePDF();
  };

  const handleWorkExperienceChange = (index: number, field: keyof WorkExperience, value: string | boolean) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value
    };
    setWorkExperiences(updatedExperiences);
  };

  const addWorkExperience = () => {
    setWorkExperiences([...workExperiences, {
      jobTitle: "",
      cityTown: "",
      employer: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      currentlyWorking: false
    }]);
  };

  const removeWorkExperience = (index: number) => {
    setWorkExperiences(workExperiences.filter((_, i) => i !== index));
  };

  const handleEducationChange = (index: number, field: keyof Education, value: string | boolean) => {
    const updatedEducation = [...educationList];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value
    };
    setEducationList(updatedEducation);
  };

  const addEducation = () => {
    setEducationList([...educationList, {
      degree: "",
      cityTown: "",
      school: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      currentlyStudying: false
    }]);
  };

  const removeEducation = (index: number) => {
    setEducationList(educationList.filter((_, i) => i !== index));
  };

  const generatePDF = async () => {
    const input = resumeRef.current;
    if (!input) return;

    try {
      // Create PDF with A4 dimensions
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // A4 dimensions in mm
      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 10;

      // Create a temporary container
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'fixed';
      tempContainer.style.top = '-9999px';
      tempContainer.style.left = '-9999px';
      document.body.appendChild(tempContainer);

      // Clone and style the resume content
      const clone = input.cloneNode(true) as HTMLElement;
      clone.style.width = '100%';
      clone.style.backgroundColor = 'white';
      tempContainer.appendChild(clone);

      // Capture the content
      const canvas = await html2canvas(clone, {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false
      });

      // Calculate dimensions to fit A4
      const imgWidth = pageWidth - (2 * margin);
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(
        canvas, 
        'PNG',
        margin,
        margin,
        imgWidth,
        imgHeight,
        undefined,
        'FAST'
      );
      heightLeft -= (pageHeight - (2 * margin));

      // Add subsequent pages if needed
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(
          canvas,
          'PNG',
          margin,
          position + margin,
          imgWidth,
          imgHeight,
          undefined,
          'FAST'
        );
        heightLeft -= (pageHeight - (2 * margin));
      }

      // Clean up
      document.body.removeChild(tempContainer);

      // Save the PDF
      pdf.save('resume.pdf');

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating your PDF. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="max-w-6xl mx-auto">
          {/* Stepper */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentStep >= step.number
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span className="mt-2 text-sm font-medium">{step.title}</span>
                </div>
              ))}
            </div>
            <div className="relative mt-4">
              <div className="h-2 bg-gray-200 rounded">
                <div
                  className="h-full bg-blue-600 rounded transition-all duration-300"
                  style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <Card className="p-6 shadow-lg rounded-xl">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="personal"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <Input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Profile Image</label>
                        <Input
                          type="file"
                          onChange={handleImageUpload}
                          accept="image/*"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-sm font-medium mb-1">Professional Title</label>
                        <Input
                          type="text"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Senior Software Engineer"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="work"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-bold text-gray-800">Work Experience</h2>
                    </div>
                    {workExperiences.map((experience, index) => (
                      <Card key={index} className="p-4 space-y-4">
                        <div className="flex justify-end">
                          <Button
                            onClick={() => removeWorkExperience(index)}
                            variant="destructive"
                            size="sm"
                            className="mb-2"
                          >
                            Delete
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input
                            placeholder="Job Title"
                            value={experience.jobTitle}
                            onChange={(e) => handleWorkExperienceChange(index, "jobTitle", e.target.value)}
                          />
                          <Input
                            placeholder="Employer"
                            value={experience.employer}
                            onChange={(e) => handleWorkExperienceChange(index, "employer", e.target.value)}
                          />
                          <Input
                            placeholder="City/Town"
                            value={experience.cityTown}
                            onChange={(e) => handleWorkExperienceChange(index, "cityTown", e.target.value)}
                          />
                          <div className="grid grid-cols-2 gap-2">
                            <div className="col-span-2">
                              <label className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={experience.currentlyWorking}
                                  onChange={(e) => handleWorkExperienceChange(index, "currentlyWorking", e.target.checked)}
                                  className="rounded border-gray-300"
                                />
                                <span className="text-sm text-gray-600">Currently working here</span>
                              </label>
                            </div>
                            <select
                              value={experience.startMonth}
                              onChange={(e) => handleWorkExperienceChange(index, "startMonth", e.target.value)}
                              className="w-full p-2 border rounded"
                            >
                              <option value="">Start Month</option>
                              {months.map((month) => (
                                <option key={month} value={month}>
                                  {month}
                                </option>
                              ))}
                            </select>
                            <select
                              value={experience.startYear}
                              onChange={(e) => handleWorkExperienceChange(index, "startYear", e.target.value)}
                              className="w-full p-2 border rounded"
                            >
                              <option value="">Start Year</option>
                              {years.map((year) => (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                            {!experience.currentlyWorking && (
                              <>
                                <select
                                  value={experience.endMonth}
                                  onChange={(e) => handleWorkExperienceChange(index, "endMonth", e.target.value)}
                                  className="w-full p-2 border rounded"
                                >
                                  <option value="">End Month</option>
                                  {months.map((month) => (
                                    <option key={month} value={month}>
                                      {month}
                                    </option>
                                  ))}
                                </select>
                                <select
                                  value={experience.endYear}
                                  onChange={(e) => handleWorkExperienceChange(index, "endYear", e.target.value)}
                                  className="w-full p-2 border rounded"
                                >
                                  <option value="">End Year</option>
                                  {years.map((year) => (
                                    <option key={year} value={year}>
                                      {year}
                                    </option>
                                  ))}
                                </select>
                              </>
                            )}
                          </div>
                        </div>
                      </Card>
                    ))}
                    <Button
                      onClick={addWorkExperience}
                      variant="outline"
                      className="w-full"
                    >
                      Add Work Experience
                    </Button>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-bold text-gray-800">Education</h2>
                    </div>
                    {educationList.map((education, index) => (
                      <Card key={index} className="p-4 space-y-4">
                        <div className="flex justify-end">
                          <Button
                            onClick={() => removeEducation(index)}
                            variant="destructive"
                            size="sm"
                            className="mb-2"
                          >
                            Delete
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input
                            placeholder="Degree"
                            value={education.degree}
                            onChange={(e) => handleEducationChange(index, "degree", e.target.value)}
                          />
                          <Input
                            placeholder="School"
                            value={education.school}
                            onChange={(e) => handleEducationChange(index, "school", e.target.value)}
                          />
                          <Input
                            placeholder="City/Town"
                            value={education.cityTown}
                            onChange={(e) => handleEducationChange(index, "cityTown", e.target.value)}
                          />
                          <div className="grid grid-cols-2 gap-2">
                            <div className="col-span-2">
                              <label className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={education.currentlyStudying}
                                  onChange={(e) => handleEducationChange(index, "currentlyStudying", e.target.checked)}
                                  className="rounded border-gray-300"
                                />
                                <span className="text-sm text-gray-600">Currently studying here</span>
                              </label>
                            </div>
                            <select
                              value={education.startMonth}
                              onChange={(e) => handleEducationChange(index, "startMonth", e.target.value)}
                              className="w-full p-2 border rounded"
                            >
                              <option value="">Start Month</option>
                              {months.map((month) => (
                                <option key={month} value={month}>
                                  {month}
                                </option>
                              ))}
                            </select>
                            <select
                              value={education.startYear}
                              onChange={(e) => handleEducationChange(index, "startYear", e.target.value)}
                              className="w-full p-2 border rounded"
                            >
                              <option value="">Start Year</option>
                              {years.map((year) => (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                            {!education.currentlyStudying && (
                              <>
                                <select
                                  value={education.endMonth}
                                  onChange={(e) => handleEducationChange(index, "endMonth", e.target.value)}
                                  className="w-full p-2 border rounded"
                                >
                                  <option value="">End Month</option>
                                  {months.map((month) => (
                                    <option key={month} value={month}>
                                      {month}
                                    </option>
                                  ))}
                                </select>
                                <select
                                  value={education.endYear}
                                  onChange={(e) => handleEducationChange(index, "endYear", e.target.value)}
                                  className="w-full p-2 border rounded"
                                >
                                  <option value="">End Year</option>
                                  {years.map((year) => (
                                    <option key={year} value={year}>
                                      {year}
                                    </option>
                                  ))}
                                </select>
                              </>
                            )}
                          </div>
                        </div>
                      </Card>
                    ))}
                    <Button
                      onClick={addEducation}
                      variant="outline"
                      className="w-full"
                    >
                      Add Education
                    </Button>
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
                    <select
                      onChange={(e) => handleSkillSelect(e.target.value)}
                    >
                      <option value="">Select a skill</option>
                      {skillsList.map((skill) => (
                        <option key={skill} value={skill}>
                          {skill}
                        </option>
                      ))}
                    </select>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedSkills.map((skill) => (
                        <Badge key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center">
                          {skill}
                          <button
                            type="button"
                            onClick={() => removeSkill(skill)}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between mt-6">
                <Button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  variant="outline"
                >
                  Previous
                </Button>
                <Button
                  onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                  disabled={currentStep === totalSteps}
                >
                  {currentStep === totalSteps - 1 ? "Preview" : "Next"}
                </Button>
              </div>
            </Card>

            {/* Preview Section */}
            <Card className="p-6 shadow-lg rounded-xl">
              <div ref={resumeRef} className="bg-white p-8 rounded-lg">
                <div className="text-center mb-6">
                  {profileImage && (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-32 h-32 object-cover rounded-full mb-4 mx-auto"
                    />
                  )}
                  <h2 className="text-4xl font-bold text-black">{formData.fullName}</h2>
                  <p className="text-gray-600 text-lg">{formData.email} | {formData.phone}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-black border-b-2 border-gray-200 pb-2">Job Title</h3>
                    <p className="text-xl text-black">{formData.jobTitle}</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-black border-b-2 border-gray-200 pb-2">Work Experience</h3>
                    {workExperiences.map((experience, index) => (
                      <div key={index} className="mb-6">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="text-xl font-semibold text-black">{experience.jobTitle}</h4>
                            <p className="text-gray-600">{experience.employer}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-600">{experience.cityTown}</p>
                            <p className="text-gray-600">
                              {experience.startMonth} {experience.startYear} 
                              {experience.currentlyWorking ? 
                                " - Present" : 
                                ` - ${experience.endMonth} ${experience.endYear}`
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-black border-b-2 border-gray-200 pb-2">Education & Qualification</h3>
                    {educationList.map((education, index) => (
                      <div key={index} className="mb-6">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="text-xl font-semibold text-black">{education.degree}</h4>
                            <p className="text-gray-600">{education.school}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-600">{education.cityTown}</p>
                            <p className="text-gray-600">
                              {education.startMonth} {education.startYear}
                              {education.currentlyStudying ? 
                                " - Present" : 
                                ` - ${education.endMonth} ${education.endYear}`
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-black border-b-2 border-gray-200 pb-2">Skills</h3>
                    <div className="flex flex-wrap gap-3 justify-start">
                      {selectedSkills.map((skill) => (
                        <span key={skill} className="bg-gray-100 text-black px-4 py-2 rounded-full text-base">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {formData.achievements && (
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-black border-b-2 border-gray-200 pb-2">Achievements</h3>
                      <p className="text-black">{formData.achievements}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Button onClick={generatePDF} className="bg-blue-600 hover:bg-blue-700">
                  Download PDF
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIresume;

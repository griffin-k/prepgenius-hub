import { useState, useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Navbar from "../components/Navbar";

interface WorkExperience {
  jobTitle: string;
  cityTown: string;
  employer: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  description: string;
}

interface Education {
  degree: string;
  cityTown: string;
  school: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  description: string;
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
    achievements: "",
    coverLetterDetails: ""
  });

  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([{
    jobTitle: "",
    cityTown: "",
    employer: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    description: ""
  }]);

  const [educationList, setEducationList] = useState<Education[]>([{
    degree: "",
    cityTown: "",
    school: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    description: ""
  }]);

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const [isWorkExpanded, setIsWorkExpanded] = useState(false);
  const [isEducationExpanded, setIsEducationExpanded] = useState(false);

  const resumeRef = useRef(null); // Reference for PDF generation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const skill = e.target.value;
    if (skill && selectedSkills.length < 5 && !selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
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

  const handleWorkExperienceChange = (index: number, field: keyof WorkExperience, value: string) => {
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
      description: ""
    }]);
  };

  const removeWorkExperience = (index: number) => {
    setWorkExperiences(workExperiences.filter((_, i) => i !== index));
  };

  const handleEducationChange = (index: number, field: keyof Education, value: string) => {
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
      description: ""
    }]);
  };

  const removeEducation = (index: number) => {
    setEducationList(educationList.filter((_, i) => i !== index));
  };

  const generatePDF = async () => {
    const input = resumeRef.current;
    if (input) {
      // Temporarily make the resume visible
      input.style.display = "block";
  
      // Capture the element as an image
      await new Promise((resolve) => setTimeout(resolve, 100)); // Wait briefly for rendering
      const canvas = await html2canvas(input);
      const imgData = canvas.toDataURL("image/png");
  
      // Generate PDF
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
      pdf.save("resume.pdf");
  
      // Hide the resume again
      input.style.display = "none";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <Navbar />
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">AI Resume & Cover Letter Generator</h2>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Profile Image Upload */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Profile Image (Optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-2 border rounded"
            />
            {profileImage && (
              <div className="mt-2">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-32 h-32 object-cover rounded-full"
                />
              </div>
            )}
          </div>

          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleChange} className="w-full p-2 border rounded" required />
          <textarea name="achievements" placeholder="Achievements (Optional)" value={formData.achievements} onChange={handleChange} className="w-full p-2 border rounded" />
          <textarea name="coverLetterDetails" placeholder="Cover Letter Details (Why you are applying?)" value={formData.coverLetterDetails} onChange={handleChange} className="w-full p-2 border rounded" required />

          {/* Work Experience Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Work Experience</h3>
            {workExperiences.map((experience, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Job Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Sales Manager"
                      value={experience.jobTitle}
                      onChange={(e) => handleWorkExperienceChange(index, 'jobTitle', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">City/Town</label>
                    <input
                      type="text"
                      placeholder="e.g. San Francisco"
                      value={experience.cityTown}
                      onChange={(e) => handleWorkExperienceChange(index, 'cityTown', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Employer</label>
                  <input
                    type="text"
                    placeholder="e.g. PwC"
                    value={experience.employer}
                    onChange={(e) => handleWorkExperienceChange(index, 'employer', e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Start Date</label>
                    <div className="grid grid-cols-2 gap-2">
                      <select
                        value={experience.startMonth}
                        onChange={(e) => handleWorkExperienceChange(index, 'startMonth', e.target.value)}
                        className="p-2 border rounded"
                      >
                        <option value="">Month</option>
                        {months.map(month => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>
                      <select
                        value={experience.startYear}
                        onChange={(e) => handleWorkExperienceChange(index, 'startYear', e.target.value)}
                        className="p-2 border rounded"
                      >
                        <option value="">Year</option>
                        {years.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">End Date</label>
                    <div className="grid grid-cols-2 gap-2">
                      <select
                        value={experience.endMonth}
                        onChange={(e) => handleWorkExperienceChange(index, 'endMonth', e.target.value)}
                        className="p-2 border rounded"
                      >
                        <option value="">Month</option>
                        {months.map(month => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>
                      <select
                        value={experience.endYear}
                        onChange={(e) => handleWorkExperienceChange(index, 'endYear', e.target.value)}
                        className="p-2 border rounded"
                      >
                        <option value="">Year</option>
                        {years.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <div className="border rounded">
                    <div className="flex border-b p-2 gap-2">
                      <button
                        type="button"
                        className="p-1 hover:bg-gray-100 rounded"
                        title="Bold"
                      >
                        B
                      </button>
                      <button
                        type="button"
                        className="p-1 hover:bg-gray-100 rounded italic"
                        title="Italic"
                      >
                        I
                      </button>
                      <button
                        type="button"
                        className="p-1 hover:bg-gray-100 rounded underline"
                        title="Underline"
                      >
                        U
                      </button>
                      <button
                        type="button"
                        className="p-1 hover:bg-gray-100 rounded"
                        title="Bullet List"
                      >
                        •
                      </button>
                    </div>
                    <textarea
                      value={experience.description}
                      onChange={(e) => handleWorkExperienceChange(index, 'description', e.target.value)}
                      className="w-full p-2 border-none focus:ring-0"
                      rows={4}
                    />
                  </div>
                </div>

                {workExperiences.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeWorkExperience(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
            
            <button
              type="button"
              onClick={addWorkExperience}
              className="w-full p-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700"
            >
              Add another work experience
            </button>
          </div>

          {/* Education Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M5 11.5v4.5a2 2 0 002 2h10a2 2 0 002-2v-4.5" />
              </svg>
              Education and Qualifications
            </h3>
            {educationList.map((education, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Degree</label>
                    <input
                      type="text"
                      placeholder="e.g. Bachelor of Science"
                      value={education.degree}
                      onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">City/Town</label>
                    <input
                      type="text"
                      placeholder="e.g. San Francisco"
                      value={education.cityTown}
                      onChange={(e) => handleEducationChange(index, 'cityTown', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">School</label>
                  <input
                    type="text"
                    placeholder="e.g. New York University"
                    value={education.school}
                    onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Start Date</label>
                    <div className="grid grid-cols-2 gap-2">
                      <select
                        value={education.startMonth}
                        onChange={(e) => handleEducationChange(index, 'startMonth', e.target.value)}
                        className="p-2 border rounded"
                      >
                        <option value="">Month</option>
                        {months.map(month => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>
                      <select
                        value={education.startYear}
                        onChange={(e) => handleEducationChange(index, 'startYear', e.target.value)}
                        className="p-2 border rounded"
                      >
                        <option value="">Year</option>
                        {years.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">End Date</label>
                    <div className="grid grid-cols-2 gap-2">
                      <select
                        value={education.endMonth}
                        onChange={(e) => handleEducationChange(index, 'endMonth', e.target.value)}
                        className="p-2 border rounded"
                      >
                        <option value="">Month</option>
                        {months.map(month => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>
                      <select
                        value={education.endYear}
                        onChange={(e) => handleEducationChange(index, 'endYear', e.target.value)}
                        className="p-2 border rounded"
                      >
                        <option value="">Year</option>
                        {years.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <div className="border rounded">
                    <div className="flex border-b p-2 gap-2">
                      <button
                        type="button"
                        className="p-1 hover:bg-gray-100 rounded"
                        title="Bold"
                      >
                        B
                      </button>
                      <button
                        type="button"
                        className="p-1 hover:bg-gray-100 rounded italic"
                        title="Italic"
                      >
                        I
                      </button>
                      <button
                        type="button"
                        className="p-1 hover:bg-gray-100 rounded underline"
                        title="Underline"
                      >
                        U
                      </button>
                      <button
                        type="button"
                        className="p-1 hover:bg-gray-100 rounded"
                        title="Bullet List"
                      >
                        •
                      </button>
                    </div>
                    <textarea
                      value={education.description}
                      onChange={(e) => handleEducationChange(index, 'description', e.target.value)}
                      className="w-full p-2 border-none focus:ring-0"
                      rows={4}
                    />
                  </div>
                </div>

                {educationList.length > 1 && (
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => removeEducation(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
            
            <button
              type="button"
              onClick={addEducation}
              className="w-full p-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add another education
            </button>
          </div>

          {/* Skills Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Skills (Select up to 5)
            </label>
            <select
              onChange={handleSkillSelect}
              value=""
              className="w-full p-2 border rounded"
              disabled={selectedSkills.length >= 5}
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
                <div
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Generate Resume & Cover Letter
          </button>
        </form>

        {/* Hidden Resume Section for PDF Generation */}
        <div ref={resumeRef} className="hidden p-6 bg-white shadow-lg rounded-lg mt-4">
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
                        {experience.startMonth} {experience.startYear} - {experience.endMonth} {experience.endYear}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-black">{experience.description}</p>
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
                        {education.startMonth} {education.startYear} - {education.endMonth} {education.endYear}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-black">{education.description}</p>
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

            <div>
              <h3 className="text-2xl font-bold mb-4 text-black border-b-2 border-gray-200 pb-2">Cover Letter</h3>
              <p className="text-black">{formData.coverLetterDetails}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIresume;

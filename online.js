document.addEventListener('DOMContentLoaded', () => {
    const viewCoursesSection = document.getElementById('viewCoursesSection');
    const createCourseSection = document.getElementById('createCourseSection');
    const viewProgressSection = document.getElementById('viewProgressSection');
  
    const courseList = document.getElementById('courseList');
    const progressList = document.getElementById('progressList');
  
    const viewCoursesBtn = document.getElementById('viewCoursesBtn');
    const createCourseBtn = document.getElementById('createCourseBtn');
    const viewProgressBtn = document.getElementById('viewProgressBtn');
  
    // Show courses
    viewCoursesBtn.addEventListener('click', () => {
      viewCoursesSection.classList.remove('hidden');
      createCourseSection.classList.add('hidden');
      viewProgressSection.classList.add('hidden');
      loadCourses();
    });
  
    //  course form
    createCourseBtn.addEventListener('click', () => {
      createCourseSection.classList.remove('hidden');
      viewCoursesSection.classList.add('hidden');
      viewProgressSection.classList.add('hidden');
    });
  
    // Showing progress
    viewProgressBtn.addEventListener('click', () => {
      viewCoursesSection.classList.add('hidden');
      createCourseSection.classList.add('hidden');
      viewProgressSection.classList.remove('hidden');
      loadProgress();
    });
  
    // Creating course
    document.getElementById('createCourseForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('courseTitle').value;
      const description = document.getElementById('courseDescription').value;
  
      const course = { title, description };
      let courses = JSON.parse(localStorage.getItem('courses')) || [];
      courses.push(course);
      localStorage.setItem('courses', JSON.stringify(courses));
  
      document.getElementById('courseTitle').value = '';
      document.getElementById('courseDescription').value = '';
      alert('Course created successfully!');
    });
  
    //  courses loading
    function loadCourses() {
      courseList.innerHTML = '';
      let courses = JSON.parse(localStorage.getItem('courses')) || [];
      courses.forEach((course, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${course.title}: ${course.description}`;
        courseList.appendChild(li);
      });
    }
  
    //  progress loads
    function loadProgress() {
      progressList.innerHTML = '';
      let courses = JSON.parse(localStorage.getItem('courses')) || [];
      courses.forEach((course, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${course.title}: Progress tracking not implemented`;
        progressList.appendChild(li);
      });
    }
  });
  
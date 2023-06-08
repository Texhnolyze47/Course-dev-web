import { createSignal, onMount } from 'solid-js';
import { For } from 'solid-js';
import { Slider } from 'solid-slider';
import Course_image_1 from '../assets/images/courses/course_image_1.jpg';
import Course_image_2 from '../assets/images/courses/course_image_2.jpg';
import Course_image_3 from '../assets/images/courses/course_image_3.jpg';
import Course_image_4 from '../assets/images/courses/course_image_4.jpg';

const CourseSlider = () => {
  const [selectedCategory, setSelectedCategory] = createSignal('All');
  const [courses, setCourses] = createSignal([]);

  const categories = ['All', 'Category 1', 'Category 2'];
  
  const coursesInfo = () => {
    return [
      { title: 'Course 1', category: 'Category 1', image: Course_image_1, link: 'https://example.com/course1' },
      { title: 'Course 2', category: 'Category 2', image: Course_image_2, link: 'https://example.com/course2' },
      { title: 'Course 3', category: 'Category 1', image: Course_image_3, link: 'https://example.com/course3' },
      { title: 'Course 4', category: 'Category 2', image: Course_image_4, link: 'https://example.com/course4' },
    ];
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleCategoryChange = (category) => {
    console.log('Selected category:', category);
    setSelectedCategory(category);
    if (category === 'All') {
        setCourses(coursesInfo());
    } else {
      const filteredCourses = courses().filter((course) => course.category === category);
      console.log('Filtered courses:', filteredCourses);
      if (filteredCourses.length > 0) {
        setCourses(filteredCourses);
      } else {
        setCourses(null);
      }
    }
  };

  onMount(() => {
    handleCategoryChange('All');
    
  });

  console.log('Courses:', courses());

  return (
    <div className="w-full">
      <div className="flex justify-center space-x-4 mb-4">
        {categories.map((category) => (
          <button
            className={`px-4 py-2 rounded-lg ${selectedCategory() === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {courses() === null ? (
        <p>Loading courses...</p>
      ) : courses().length > 0 ? (
        <Slider {...settings}>
          <For each={courses()}>
            {(course) => (
              <a href={course.link} className="px-4">
                <div className="relative">
                  <img src={course.image} alt={course.title} className="w-full h-64 object-cover rounded-lg shadow-lg" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-75 rounded-b-lg">
                    <h3 className="text-lg font-medium">{course.title}</h3>
                    <p className="text-gray-500">{course.category}</p>
                  </div>
                </div>
              </a>
            )}
          </For>
        </Slider>
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
};

export default CourseSlider;
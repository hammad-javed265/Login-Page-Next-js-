"use client"
import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import AdminLayout from '../components/layouts/admin/AdminLayout'
import useCourseStore from '@/hooks/courseStore'

const Orders = () => {
  // const courses = useCourseStore((state) => state.courses);
  // const removeCourse = useCourseStore((state) => state.removeCourse);
  // const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus);

  const {courses, removeCourse, toggleCourseStatus} = useCourseStore((state) => ({
    courses: state.courses,
    removeCourse: state.removeCourse,
    toggleCourseStatus: state.toggleCourseStatus
  }))
  console.log(courses);
  return (
    <AdminLayout>
      <h2>Orders</h2>
    

    </AdminLayout>
  )
}

export default Orders
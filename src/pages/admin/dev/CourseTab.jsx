import RichTextEditor from '@/components/RichTextEditor'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import React, { useState } from 'react'

const CourseTab = () => {
  const [input, setInput] = useState({
    courseTitle: '',
    subTitle: '',
    description: '',
    category: '',
    courseLevel: '',
    coursePrice: '',
    courseThumbnail: '',
  })
  
  const changeEventHandler = (e) => {
    const {name, value} = e.target
    setInput({...input, [name]: value})
  }


  
  const isPublished = false
  
  return (
    <Card>
      <CardHeader className='flex flex-row justify-between'>
        <div>
          <CardTitle>Update your Course</CardTitle>
          <CardDescription>Make changes to your courses here and then proceed to save when done</CardDescription>
        </div>
        <div className='flex gap-4'>
          <Button variant='outline'>
            {
              isPublished ? (
                'Unpublish'
              ) : (
                'Publish'
              )
            }
          </Button>
          <Button>Remove Course</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className='space-y-4 mt-5'>
          <div>
            <Label>Title</Label>
            <Input type='text' name='courseTitle' value={input.courseTitle} onChange={changeEventHandler} placeholder='Course Title' />
          </div>
          <div>
            <Label>Subtitle</Label>
            <Input type='text' name='subTitle' value={input.subTitle} onChange={changeEventHandler} placeholder='A brief description of the provided course' />
          </div>
          <div>
            <Label>Description</Label>
            <RichTextEditor input={input} setInput={setInput} />
          </div>
          <div className='flex items-center gap-5'>
            <div>
              <Label>Category</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {/* 7 : 49 : 23 */}
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    <SelectItem value="programming">Programming</SelectItem>
                    <SelectItem value="ui-ux">UI / UX Designing</SelectItem>
                    <SelectItem value="front-end-web">Front Web Development</SelectItem>
                    <SelectItem value="front-end-app">Front App Development</SelectItem>
                    <SelectItem value="back-end">Back End Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CourseTab
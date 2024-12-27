import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import React from 'react'

const Course = () => {
  return (
    <Card className='overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 cursor-pointer'>
      <div className='relative'>
        <img src='https://www.freecodecamp.org/news/content/images/size/w2000/2024/03/csharp2.png' alt='' className='w-full h-36 object-cover rounded-t-lg' />
      </div>
      <CardContent className='px-5 py-4 space-y-3'>
        <h1 className='hover:underline font-bold text-lg truncate'>C# Full Course</h1>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <Avatar className='h-8 w-8'>
              <AvatarImage src='https://avatars.githubusercontent.com/u/185953875?v=4' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className='font-medium text-sm'>Anurag B</h1>
          </div>
          <Badge className='px-2 py-1 text-xs rounded-full'>
            Medium
          </Badge>
        </div>
        <div className='text-lg font-bold'>
          <span>Price: Free</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default Course
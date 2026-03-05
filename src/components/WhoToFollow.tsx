import { getRandomUsers } from '@/actions/user.action'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

async function WhoToFollow() {
    const users = await getRandomUsers()
    if(users.length===0)return null;
  return (
    <Card>
        <CardHeader>
            <CardTitle>Who To Follow</CardTitle>
        </CardHeader>
        <CardContent>
            <div className='space-y-4'>
                {users.map((user)=>(
                    <div key={user.id} className="flex gap-2 items-center justify-between">
                        <div className="flex items-center gap-1">
                            <Link>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
  )
}

export default WhoToFollow
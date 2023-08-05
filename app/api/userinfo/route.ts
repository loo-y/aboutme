import { NextRequest, NextResponse } from 'next/server'
import userInfo from '../mockinfo/userInfo'

export async function GET(request: NextRequest) {
    let response: any = undefined
    try {
        response = userInfo.data
    } catch (e) {}

    return NextResponse.json({ satus: 0, response }, { status: 200 })
}

export async function POST(request: NextRequest) {
    let response: any = undefined
    try {
        response = userInfo.data
    } catch (e) {}

    return NextResponse.json({ satus: 0, response }, { status: 200 })
}

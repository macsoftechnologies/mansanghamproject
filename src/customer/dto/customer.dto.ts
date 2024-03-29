import { ApiProperty } from "@nestjs/swagger"

export class customerDto{
    @ApiProperty()
    customerId: string
    @ApiProperty()
    sanghamId: string
    @ApiProperty()
    firstName: string
    @ApiProperty()
    mobileNo: number
    @ApiProperty()
    aadharNo: string
    @ApiProperty()
    address: string
    @ApiProperty()
    aadharImage: string
    @ApiProperty()
    aadharImage2: string
    @ApiProperty()
    profileImage: string
    // @ApiProperty()
    // fingerPrint: string
    @ApiProperty()
    status: string
    @ApiProperty()
    otp: number
}
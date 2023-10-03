
import { isUserLoading} from '@/store/selectors/isUserLoading';
import { UserEmail } from '@/store/selectors/userEmail';
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil';
import {Grid, Typography,Button} from "@mui/material";



export default function Home() {
  const router = useRouter();

  const userEmail = useRecoilValue(UserEmail);
  const userLoading = useRecoilValue(isUserLoading);


  return <div>
  <Grid container style={{padding: "5vw"}}>
      <Grid item xs={12} md={6} lg={6}>
          <div style={{marginTop: 100}}>
              <Typography variant={"h2"}>
                  LVLup Admin
              </Typography>
              <Typography variant={"h5"}>
                  A place to learn, earn and grow 
              </Typography>
            
              {userLoading && !userEmail &&  <div style={{display: "flex", marginTop: 20}}>
                  <div style={{marginRight: 10}}>
                      <Button
                          size={"large"}
                          variant={"contained"}
                          onClick={() => {
                            router.push("/signup")
                          }}
                      >Signup</Button>
                  </div>
                  <div>
                      <Button
                          size={"large"}
                          variant={"contained"}
                          onClick={() => {
                            router.push("/signin")
                          }}
                      >Signin</Button>
                  </div>
              </div>}
          </div>
          <div>
          </div>
      </Grid>
      <Grid item xs={12} md={6} lg={6}  style={{marginTop: 20}}>
          <img src={"https://img.freepik.com/free-vector/empty-classroom-interior-with-chalkboard_1308-65378.jpg"} width={500} height={400} alt={"course-image"}/>
      </Grid>
  </Grid>
</div>
}

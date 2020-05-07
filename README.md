# jmttrailhead.com

**Technologies Used**
- AWS EC2 Instance, Elastic IP Address
- Domain from Google Domains
- React
- Node
- Nginx

**Deployment Instructions**
- `chmod 400 jmttrailhead.pem`
- `ssh -i "jmttrailhead.pem" ubuntu@ec2-54-173-211-23.compute-1.amazonaws.com`
- Navigate to repository `jmttrailhead`
- Run `sudo git pull --rebase origin`
- Run `sudo npm install` if new packages exist
- Navigate into `/client` and run `sudo npm install`  if new packages exist
- Run ``
- Run `sudo reboot` and this should kill Ubunto console and restart the website
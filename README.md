# jmttrailhead.com

**Technologies Used**
- AWS EC2 Instance, Elastic IP Address
- Domain from Google Domains
- React
- Node
- Nginx
- OAuth 2.0

**SSL**
- Ecryption from letsencrypt, should renew automatically every day via command in `crontab -e`

**Deployment Instructions**
- `chmod 400 jmttrailhead.pem`
- `ssh -i "jmttrailhead.pem" ubuntu@ec2-54-173-211-23.compute-1.amazonaws.com`
- Navigate to repository `jmttrailhead`
- Run `sudo git pull --rebase origin`
- Run `sudo npm install` if new packages exist
- Run `sudo yarn build`
- Run `sudo reboot` and this should kill Ubunto console and restart the website

If changes were made to `Node.service`:
- `sudo systemctl stop Node.service`
- `sudo systemctl daemon-reload`
- `sudo systemctl start Node.service`
- `sudo systemctl enable Node.service`
- Check if node server is running by running `sudo systemctl status Node.service`

If changes were made to `www.jmttrailhead.com.config` AKA Nginx:
- `sudo systemctl stop nginx.service`
- `sudo nginx -s reload && nginx -t`
- `sudo systemctl daemon-reload`
- `sudo systemctl start nginx.service`
- `sudo systemctl enable nginx.service`
- Check if nginx server is running by running `sudo systemctl status nginx.service`

**Files to build manually**
- jmttrrailhead.pem
- Keys.js
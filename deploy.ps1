param(
    [string]$CommitMsg = "chore: production deploy"
)

if (Test-Path .env.deploy) {
    Get-Content .env.deploy | ForEach-Object {
        if ($_ -match "^([^=]+)=(.+)$") {
            [System.Environment]::SetEnvironmentVariable($Matches[1], $Matches[2], "Process")
        }
    }
}

if (-not $env:VERCEL_TOKEN) {
    Write-Error "VERCEL_TOKEN is not set in .env.deploy"
    exit 1
}

$OrigName  = git config user.name
$OrigEmail = git config user.email

try {
    git config user.name "aneeverse"
    git config user.email "aneverse@gmail.com"
    Write-Host "Git user switched to aneeverse"

    # Always update deploy timestamp so there is always something to commit
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Set-Content -Path ".deploy-timestamp" -Value "Last deployed: $timestamp by aneeverse" -Encoding utf8

    git add .
    $changes = git status --porcelain
    if ($changes) {
        git commit -m $CommitMsg
        git push
        Write-Host "Committed and pushed as aneeverse"
    }

    vercel deploy --prod --token $env:VERCEL_TOKEN
    Write-Host "Deployed to production"

} finally {
    git config user.name $OrigName
    git config user.email $OrigEmail
    Write-Host "Git user restored to $OrigName"
}

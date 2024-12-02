# Nick makes variables in many languages

something="mom please"
echo $something

mom="let me use her hotspot at 2:20-3:30"
echo $mom

function nickIsAwesome(){
    # can't return string in shell script
    echo "Nick's $1 is awsome!!!"

}

nickIsAwesome "uncleScotty"

nickIsAwesome "yay"

function cavemanis() {
    echo "caveman $1 is"
}

cavemanis "dad"
